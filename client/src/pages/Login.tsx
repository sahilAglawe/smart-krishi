import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  message?: string;
  token?: string;
  error?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        
      const response = await axios.post<LoginResponse>(
        'http://localhost:1818/api/v1/user/login',
        formData,
      );


      if (response.data.success) {
        // Store token and user data (adjust according to your needs)
        console.log(response.data)
        
        localStorage.setItem('authToken', response.data.token);
        
        // Redirect to home/dashboard
        navigate('/');
      } else {
        setError(response.data.error || 'Invalid email or password');
      }
    } catch (err) {
      const axiosError = err as AxiosError<LoginResponse>;
      if (axiosError.response) {
        setError(
          axiosError.response.data.error || 
          axiosError.response.data.message || 
          'Login failed. Please try again.'
        );
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg border border-green-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Login to Smart Krishi</h2>
        <p className="text-green-600">Combine traditional wisdom with modern innovation</p>
      </div>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-green-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your registered email"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-green-600">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
          />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md text-white font-medium ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            } transition-colors flex items-center justify-center`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/register" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <a href="/forgot-password" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;