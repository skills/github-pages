import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Play, RefreshCw, Download, Video, Settings, 
  History, Sliders, Camera 
} from 'lucide-react';

const VideoGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('basic');
  const [resolution, setResolution] = useState('480p');
  const [duration, setDuration] = useState(5);
  const [processing, setProcessing] = useState(false);
  const [generations, setGenerations] = useState([]);
  const [error, setError] = useState('');

  const models = [
    {
      id: 'basic',
      name: 'בסיסי (חינמי)',
      maxDuration: 5,
      maxResolution: '480p',
      description: 'מודל בסיסי ליצירת סרטונים קצרים',
    },
    {
      id: 'advanced',
      name: 'מתקדם (חינמי)',
      maxDuration: 10,
      maxResolution: '720p',
      description: 'מודל משופר עם יכולות מורכבות יותר',
      requiresAuth: true
    }
  ];

  const resolutions = {
    '480p': { width: 854, height: 480 },
    '720p': { width: 1280, height: 720 }
  };

  const generateVideo = async () => {
    if (!prompt.trim()) {
      setError('נא להזין תיאור לסרטון');
      return;
    }

    setError('');
    setProcessing(true);

    try {
      // סימולציה של יצירת סרטון
      await new Promise(r => setTimeout(r, 3000));

      const newGeneration = {
        id: Date.now(),
        prompt,
        model: selectedModel,
        resolution,
        duration,
        timestamp: new Date().toLocaleString('he-IL'),
        // בשלב זה נשתמש בתמונה פשוטה כדוגמה
        videoUrl: `/api/placeholder/${resolutions[resolution].width}/${resolutions[resolution].height}`,
        status: 'completed'
      };

      setGenerations(prev => [newGeneration, ...prev]);
    } catch (err) {
      setError('אירעה שגיאה ביצירת הסרטון');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>יצירת סרטון בעזרת בינה מלאכותית</span>
            <span className="text-sm font-normal text-gray-500">
              מודל: {models.find(m => m.id === selectedModel)?.name}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">תיאור הסרטון:</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="תאר את הסרטון שברצונך ליצור..."
              className="h-32"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium">מודל:</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full mt-1 rounded-md border border-gray-300 p-2"
              >
                {models.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.name} ({model.maxDuration}s, {model.maxResolution})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">רזולוציה:</label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value)}
                className="w-full mt-1 rounded-md border border-gray-300 p-2"
              >
                <option value="480p">480p</option>
                <option value="720p" disabled={selectedModel === 'basic'}>
                  720p (מודל מתקדם)
                </option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">אורך (שניות):</label>
              <Input
                type="number"
                min="1"
                max={models.find(m => m.id === selectedModel)?.maxDuration}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={generateVideo}
            disabled={processing || !prompt.trim()}
            className="w-full"
          >
            {processing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                יוצר סרטון...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                צור סרטון
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generations.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>הסרטונים שלי</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {generations.map((gen) => (
                <div key={gen.id} className="border rounded-lg p-4">
                  <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img
                      src={gen.videoUrl}
                      alt={gen.prompt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm">{gen.prompt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{gen.timestamp}</span>
                      <div className="flex items-center gap-2">
                        <span>{gen.resolution}</span>
                        <span>·</span>
                        <span>{gen.duration}s</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      הורד סרטון
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VideoGenerator;
