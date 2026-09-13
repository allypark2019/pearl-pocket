import { useEffect, useState } from 'react';
import BootSequence from '@/components/BootSequence';
import StatusBar from '@/components/StatusBar';
import DeviceFrame from '@/components/DeviceFrame';
import HomeScreen from '@/components/HomeScreen';
import ModuleShell from '@/components/ModuleShell';
import EncyclopediaView from '@/components/modules/EncyclopediaView';
import LabView from '@/components/modules/LabView';
import CreaturesView from '@/components/modules/CreaturesView';
import LogView from '@/components/modules/LogView';
import { MODULES, type ModuleId } from '@/data/modules';

type Screen = 'boot' | 'home' | ModuleId;

export default function App() {
  const [screen, setScreen] = useState<Screen>('boot');
  const [bootRun, setBootRun] = useState(0);

  useEffect(() => {
    const forceBoot = () => {
      setBootRun((n) => n + 1);
      setScreen('boot');
    };
    forceBoot();
    window.addEventListener('pageshow', forceBoot);
    return () => window.removeEventListener('pageshow', forceBoot);
  }, []);

  const handleBootComplete = () => setScreen('home');
  const handleSelectModule = (id: ModuleId) => setScreen(id);
  const handleBack = () => setScreen('home');

  if (screen === 'boot') {
    return (
      <DeviceFrame>
        <BootSequence key={bootRun} onComplete={handleBootComplete} />
      </DeviceFrame>
    );
  }

  if (screen === 'home') {
    return (
      <DeviceFrame>
        <HomeScreen onSelectModule={handleSelectModule} />
        <StatusBar />
      </DeviceFrame>
    );
  }

  const module = MODULES.find((m) => m.id === screen);
  if (!module) return null;

  return (
    <DeviceFrame>
      <ModuleShell module={module} onBack={handleBack}>
        {screen === 'encyclopedia' && <EncyclopediaView />}
        {screen === 'lab' && <LabView />}
        {screen === 'creatures' && <CreaturesView />}
        {screen === 'log' && <LogView />}
      </ModuleShell>
      <StatusBar />
    </DeviceFrame>
  );
}
