import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageSquare, Heart, Send, ArrowRight } from "lucide-react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

// Type definitions for better type safety
interface Author {
  name: string;
  avatar: string;
  location: string;
}

interface Comment {
  id: number;
  author: Author;
  content: string;
  time: string;
}

interface Post {
  id: number;
  author: Author;
  content: string;
  likes: number;
  comments: Comment[];
  time: string;
  liked: boolean;
  showComments: boolean;
}

const Community = () => {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentText, setCommentText] = useState<{ [key: number]: string }>({});
  const postsPerPage = 3;
  const { toast } = useToast();

  // Sync with Navbar language when component mounts
  useEffect(() => {
    const navbarLanguageEl = document.querySelector('.navbar-language-state');
    if (navbarLanguageEl) {
      const navbarLanguage = navbarLanguageEl.getAttribute('data-language') as 'english' | 'hindi';
      if (navbarLanguage) {
        setLanguage(navbarLanguage);
      }
    }

    // Create temp data listener for Navbar language changes
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setLanguage(customEvent.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  // Example community posts
  useEffect(() => {
    const examplePosts = [
      {
        id: 1,
        author: {
          name: language === 'english' ? 'Rajesh Patel' : 'राजेश पटेल',
          avatar: 'R',
          location: language === 'english' ? 'Gujarat' : 'गुजरात'
        },
        content: language === 'english' 
          ? 'I have been using Jeevamrut for the past 6 months and have noticed significant improvement in my soil health. My wheat crops are growing stronger than before!' 
          : 'मैं पिछले 6 महीनों से जीवामृत का उपयोग कर रहा हूं और मैंने अपनी मिट्टी के स्वास्थ्य में महत्वपूर्ण सुधार देखा है। मेरी गेहूं की फसलें पहले से अधिक मजबूत हो रही हैं!',
        likes: 24,
        comments: [],
        time: language === 'english' ? '2 hours ago' : '2 घंटे पहले',
        liked: false,
        showComments: false
      },
      {
        id: 2,
        author: {
          name: language === 'english' ? 'Meena Kumari' : 'मीना कुमारी',
          avatar: 'M',
          location: language === 'english' ? 'Madhya Pradesh' : 'मध्य प्रदेश'
        },
        content: language === 'english' 
          ? 'Has anyone tried the new drip irrigation systems? I\'m looking to install one but unsure which brand is reliable and affordable.' 
          : 'क्या किसी ने नई ड्रिप सिंचाई प्रणालियों का प्रयास किया है? मैं एक स्थापित करना चाहता हूं लेकिन यह अनिश्चित है कि कौन सा ब्रांड विश्वसनीय और किफायती है।',
        likes: 15,
        comments: [],
        time: language === 'english' ? '5 hours ago' : '5 घंटे पहले',
        liked: false,
        showComments: false
      },
      {
        id: 3,
        author: {
          name: language === 'english' ? 'Suresh Kumar' : 'सुरेश कुमार',
          avatar: 'S',
          location: language === 'english' ? 'Punjab' : 'पंजाब'
        },
        content: language === 'english' 
          ? 'Attended the Smart Krishi workshop last week. Learned how to make organic pesticides using neem and chili. Already seeing fewer pests in my vegetable garden!' 
          : 'पिछले हफ्ते स्मार्ट कृषि कार्यशाला में भाग लिया। नीम और मिर्च का उपयोग करके जैविक कीटनाशक बनाना सीखा। पहले से ही अपने सब्जी के बगीचे में कम कीड़े देख रहा हूं!',
        likes: 32,
        comments: [],
        time: language === 'english' ? '1 day ago' : '1 दिन पहले',
        liked: false,
        showComments: false
      },
      {
        id: 4,
        author: {
          name: language === 'english' ? 'Anita Sharma' : 'अनीता शर्मा',
          avatar: 'A',
          location: language === 'english' ? 'Rajasthan' : 'राजस्थान'
        },
        content: language === 'english' 
          ? 'I\'ve been experimenting with mulching techniques for my tomato plants. Using rice straw has reduced water usage and kept the soil cooler during summer heat.' 
          : 'मैं अपने टमाटर के पौधों के लिए मल्चिंग तकनीकों के साथ प्रयोग कर रही हूं। चावल के भूसे का उपयोग करने से पानी के उपयोग में कमी आई है और गर्मियों की गर्मी के दौरान मिट्टी ठंडी रही है।',
        likes: 19,
        comments: [],
        time: language === 'english' ? '2 days ago' : '2 दिन पहले',
        liked: false,
        showComments: false
      },
      {
        id: 5,
        author: {
          name: language === 'english' ? 'Dinesh Verma' : 'दिनेश वर्मा',
          avatar: 'D',
          location: language === 'english' ? 'Uttar Pradesh' : 'उत्तर प्रदेश'
        },
        content: language === 'english' 
          ? 'Looking for advice on dealing with powdery mildew on my cucumber plants. Any natural solutions that worked for you?' 
          : 'मेरे खीरे के पौधों पर पाउडरी मिल्ड्यू से निपटने के लिए सलाह की तलाश है। कोई प्राकृतिक समाधान जो आपके लिए काम किया?',
        likes: 8,
        comments: [],
        time: language === 'english' ? '3 days ago' : '3 दिन पहले',
        liked: false,
        showComments: false
      }
    ];
    
    setPosts(examplePosts);
  }, [language]);

  // Handle like functionality
  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  // Toggle comments visibility
  const toggleComments = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          showComments: !post.showComments
        };
      }
      return post;
    }));
  };

  // Handle comment submission
  const handleCommentSubmit = (postId: number) => {
    const commentContent = commentText[postId]?.trim();
    
    if (!commentContent) {
      toast({
        title: language === 'english' ? "Empty comment" : "खाली टिप्पणी",
        description: language === 'english' ? "Please write something to comment." : "कृपया टिप्पणी करने के लिए कुछ लिखें।",
        variant: "destructive"
      });
      return;
    }
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment = {
          id: (post.comments.length + 1),
          author: {
            name: language === 'english' ? 'You' : 'आप',
            avatar: 'Y',
            location: language === 'english' ? 'Your Farm' : 'आपका खेत'
          },
          content: commentContent,
          time: language === 'english' ? 'Just now' : 'अभी अभी'
        };
        
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));
    
    // Clear the comment input for the specific post
    setCommentText({
      ...commentText,
      [postId]: ''
    });
    
    toast({
      title: language === 'english' ? "Comment added!" : "टिप्पणी जोड़ी गई!",
      description: language === 'english' ? "Your comment has been added to the post." : "आपकी टिप्पणी पोस्ट में जोड़ी गई है।"
    });
  };

  // Handle post submission
  const handlePostSubmit = () => {
    if (!newPost.trim()) {
      toast({
        title: language === 'english' ? "Empty post" : "खाली पोस्ट",
        description: language === 'english' ? "Please write something to share." : "कृपया साझा करने के लिए कुछ लिखें।",
        variant: "destructive"
      });
      return;
    }
    
    const newPostObj = {
      id: posts.length + 1,
      author: {
        name: language === 'english' ? 'You' : 'आप',
        avatar: 'Y',
        location: language === 'english' ? 'Your Farm' : 'आपका खेत'
      },
      content: newPost,
      likes: 0,
      comments: [],
      time: language === 'english' ? 'Just now' : 'अभी अभी',
      liked: false,
      showComments: false
    };
    
    setPosts([newPostObj, ...posts]);
    setNewPost("");
    
    toast({
      title: language === 'english' ? "Post shared!" : "पोस्ट साझा किया गया!",
      description: language === 'english' ? "Your experience has been shared with the community." : "आपका अनुभव समुदाय के साथ साझा किया गया है।"
    });
  };
  
  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-krishi-green">
            {language === 'english' ? 'Farmer Community' : 'किसान समुदाय'}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {language === 'english'
              ? 'Connect with fellow farmers, share experiences, ask questions, and learn from success stories across the country.'
              : 'साथी किसानों से जुड़ें, अनुभव साझा करें, प्रश्न पूछें, और देश भर में सफलता की कहानियों से सीखें।'}
          </p>
        </div>

        <div className="mb-8">
          <Card className="p-4">
            <CardContent className="p-0 pt-4">
              <textarea 
                className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-krishi-green/50"
                rows={3}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder={language === 'english' 
                  ? "Share your farming experience or ask a question..." 
                  : "अपने खेती के अनुभव को साझा करें या प्रश्न पूछें..."}
              ></textarea>
              <div className="mt-4 flex justify-end">
                <Button 
                  className="bg-krishi-green hover:bg-krishi-green/90 flex items-center gap-2"
                  onClick={handlePostSubmit}
                >
                  <Send className="h-4 w-4" />
                  {language === 'english' ? 'Share Post' : 'पोस्ट शेयर करें'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          {currentPosts.map((post) => (
            <Card key={post.id} className="p-4">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>{post.author.avatar}</AvatarFallback>
                    <AvatarImage src="" />
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{post.author.name}</h3>
                        <p className="text-sm text-gray-500">{post.author.location} • {post.time}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700">{post.content}</p>
                    <div className="mt-4 flex items-center space-x-4">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleLike(post.id)}
                        className={post.liked ? "text-red-500" : ""}
                      >
                        <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} /> {post.likes}
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toggleComments(post.id)}
                      >
                        <MessageSquare className="h-4 w-4 mr-1" /> {post.comments.length}
                      </Button>
                    </div>
                    
                    {post.showComments && (
                      <div className="mt-4 border-t pt-4">
                        <h4 className="text-sm font-medium mb-2">
                          {language === 'english' ? 'Comments' : 'टिप्पणियाँ'}
                        </h4>
                        
                        {/* Comment list */}
                        {post.comments.length > 0 ? (
                          <div className="space-y-3 mb-4">
                            {post.comments.map((comment) => (
                              <div key={comment.id} className="flex items-start space-x-3">
                                <Avatar className="h-6 w-6">
                                  <AvatarFallback className="text-xs">{comment.author.avatar}</AvatarFallback>
                                  <AvatarImage src="" />
                                </Avatar>
                                <div>
                                  <div className="flex items-center">
                                    <p className="text-sm font-medium">{comment.author.name}</p>
                                    <span className="text-xs text-gray-500 ml-2">• {comment.time}</span>
                                  </div>
                                  <p className="text-sm text-gray-700">{comment.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-500 mb-4">
                            {language === 'english' 
                              ? 'No comments yet. Be the first to comment!' 
                              : 'अभी तक कोई टिप्पणी नहीं। टिप्पणी करने वाले पहले व्यक्ति बनें!'}
                          </p>
                        )}
                        
                        {/* Add comment form */}
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">Y</AvatarFallback>
                            <AvatarImage src="" />
                          </Avatar>
                          <div className="flex-1">
                            <Textarea 
                              placeholder={language === 'english' ? "Add a comment..." : "एक टिप्पणी जोड़ें..."}
                              className="text-sm min-h-[60px] resize-none"
                              value={commentText[post.id] || ''}
                              onChange={(e) => setCommentText({
                                ...commentText,
                                [post.id]: e.target.value
                              })}
                            />
                            <div className="flex justify-end mt-2">
                              <Button
                                size="sm"
                                onClick={() => handleCommentSubmit(post.id)}
                                className="bg-krishi-green hover:bg-krishi-green/90 flex items-center gap-1"
                              >
                                <ArrowRight className="h-3 w-3" />
                                {language === 'english' ? 'Comment' : 'टिप्पणी करें'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {posts.length > postsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Community;
