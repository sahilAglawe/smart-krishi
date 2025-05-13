
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PreviewCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
  buttonText: string;
  altText: string;
  reverse?: boolean;
}

export function PreviewCard({ 
  title, 
  description, 
  imageSrc, 
  linkTo, 
  buttonText,
  altText,
  reverse = false 
}: PreviewCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
      <div className="w-full md:w-1/2">
        <img 
          src={imageSrc} 
          alt={altText}
          className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-krishi-green">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
        <Button asChild className="mt-6 bg-krishi-green hover:bg-krishi-green/90">
          <Link to={linkTo}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}
