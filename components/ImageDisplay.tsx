
import React from 'react';
import { LoadingSpinnerIcon, BuildingIcon, ErrorIcon } from './icons';

interface ImageDisplayProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
          <LoadingSpinnerIcon size="h-12 w-12" />
          <p className="mt-4 text-lg font-medium">Generating your vision...</p>
          <p className="mt-1 text-sm">This may take a moment. High-quality architecture needs careful planning.</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center text-red-400">
          <ErrorIcon />
          <p className="mt-4 text-lg font-semibold">An Error Occurred</p>
          <p className="mt-1 text-sm">{error}</p>
        </div>
      );
    }
    if (image) {
      return (
        <img
          src={image}
          alt="Generated architectural rendering"
          className="w-full h-full object-contain rounded-lg shadow-2xl animate-fade-in"
        />
      );
    }
    return (
      <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
        <BuildingIcon />
        <p className="mt-4 text-lg font-medium">Your architectural rendering will appear here.</p>
        <p className="mt-1 text-sm">Describe a scene and click "Generate".</p>
      </div>
    );
  };

  return (
    <div className="bg-gray-800/50 border-2 border-dashed border-gray-700 rounded-lg aspect-[16/9] flex items-center justify-center p-4 relative overflow-hidden">
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        `}
      </style>
      {renderContent()}
    </div>
  );
};

export default ImageDisplay;
