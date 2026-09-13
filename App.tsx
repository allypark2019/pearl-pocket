import { useEffect, useState } from 'react';
import BootSequence from './BootSequence';
import StatusBar from './StatusBar';
import DeviceFrame from './DeviceFrame';
import HomeScreen from './HomeScreen';
import ModuleShell from './ModuleShell';
import EncyclopediaView from './EncyclopediaView';
import LabView from './LabView';
import CreaturesView from './CreaturesView';
import LogView from './LogView';
import { MODULES, type ModuleId } from './modules';

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
