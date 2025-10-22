
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import PromptInput from './components/PromptInput';
import ImageDisplay from './components/ImageDisplay';
import { generateArchitectureImage } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for the rendering.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageDataUrl = await generateArchitectureImage(prompt);
      setGeneratedImage(imageDataUrl);
    } catch (err) {
      console.error(err);
      setError('Failed to generate image. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [prompt]);

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl">
        <Header />
        <main className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex-shrink-0">
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleGenerate}
              isLoading={isLoading}
            />
          </div>
          <div className="lg:w-2/3 flex-grow">
            <ImageDisplay 
              image={generatedImage}
              isLoading={isLoading}
              error={error} 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
