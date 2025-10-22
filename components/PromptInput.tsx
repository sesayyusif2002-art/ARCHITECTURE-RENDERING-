
import React from 'react';
import { LoadingSpinnerIcon } from './icons';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      if (!isLoading) {
        onSubmit();
      }
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 sticky top-8">
      <label htmlFor="prompt" className="block text-lg font-semibold text-gray-300">
        Describe Your Vision
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="e.g., A minimalist villa in the Swiss Alps, with large glass windows and a natural stone facade, during a misty sunrise."
        className="w-full h-48 p-3 bg-gray-900 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 text-gray-200 resize-none placeholder-gray-500"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500 transition-all duration-200 transform hover:scale-105 disabled:scale-100"
      >
        {isLoading ? (
          <>
            <LoadingSpinnerIcon />
            Generating...
          </>
        ) : (
          'Generate Rendering'
        )}
      </button>
       <p className="text-xs text-center text-gray-500">
        Tip: Press Ctrl+Enter or Cmd+Enter to generate.
      </p>
    </div>
  );
};

export default PromptInput;
