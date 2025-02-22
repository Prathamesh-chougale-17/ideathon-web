import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Flame, User, Box, Cloud, Camera, Cpu, 
  Gauge, Zap, Layers, Binary, Activity 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-blue-500 dark:text-blue-400">
              AI-Powered
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">
            Advanced AI Detection & Environmental Clearing
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Powered by YOLOv12 for precise detection and state-of-the-art dehazing algorithms
          </p>
        </div>

        {/* Core Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Camera className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-slate-900 dark:text-slate-50">Detection Capabilities</CardTitle>
              </div>
              <CardDescription className="dark:text-slate-400">
                Powered by YOLOv12 Technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Flame className="h-5 w-5 text-red-500 dark:text-red-400" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-50">Fire Detection</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Real-time fire and smoke detection with high accuracy</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <User className="h-5 w-5 text-green-500 dark:text-green-400" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-50">Human Detection</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Advanced human presence detection and tracking</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Box className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-50">Object Detection</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Multi-class object detection and classification</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <CardTitle className="text-slate-900 dark:text-slate-50">Environmental Clearing</CardTitle>
              </div>
              <CardDescription className="dark:text-slate-400">
                Advanced Dehazing Algorithms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                  <h3 className="font-medium text-slate-900 dark:text-slate-50">Fog & Haze Removal</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Real-time dehazing with preservation of natural colors and details
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                  <h3 className="font-medium text-slate-900 dark:text-slate-50">Smoke Clearing</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Advanced smoke pattern recognition and removal algorithms
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
                  <h3 className="font-medium text-slate-900 dark:text-slate-50">Image Enhancement</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Automatic contrast and clarity optimization
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Technical Specifications */}
        <Card className="mb-12 border dark:border-slate-800">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-slate-900 dark:text-slate-50">
                  Technical Specifications
                </CardTitle>
                <CardDescription className="mt-2">
                  Advanced AI capabilities powered by cutting-edge technology
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-sm">
                YOLOv12 Powered
              </Badge>
            </div>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Detection Model */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50">
                    Detection Model
                  </h3>
                </div>
                <Card className="border-l-4 border-l-blue-500 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <Binary className="h-4 w-4 text-blue-500" />
                        <span className="text-slate-600 dark:text-slate-400">YOLOv12 architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        <span className="text-slate-600 dark:text-slate-400">Real-time processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-blue-500" />
                        <span className="text-slate-600 dark:text-slate-400">Multi-object tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Dehazing Algorithm */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50">
                    Dehazing Algorithm
                  </h3>
                </div>
                <Card className="border-l-4 border-l-purple-500 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <Binary className="h-4 w-4 text-purple-500" />
                        <span className="text-slate-600 dark:text-slate-400">Deep learning based</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-purple-500" />
                        <span className="text-slate-600 dark:text-slate-400">Adaptive processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-purple-500" />
                        <span className="text-slate-600 dark:text-slate-400">Color preservation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Performance */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-green-500 dark:text-green-400" />
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50">
                    Performance
                  </h3>
                </div>
                <Card className="border-l-4 border-l-green-500 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-green-500" />
                        <span className="text-slate-600 dark:text-slate-400">Low latency</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-green-500" />
                        <span className="text-slate-600 dark:text-slate-400">High accuracy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-green-500" />
                        <span className="text-slate-600 dark:text-slate-400">Scalable processing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default HomePage;