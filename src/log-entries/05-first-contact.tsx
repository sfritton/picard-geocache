import React from 'react';
import LogEntry from '../components/LogEntry';
import { COORDINATES } from '../constants';

const FirstContactEntry: React.FC = () => {
  return (
    <LogEntry stardate="46258.4">
      With the bomb disarmed, we are towing the Osprey to rendezvous with the Klingons. Even as this
      mission draws to a close, I have already received orders from Starfleet for the Enterprise's
      next assignment. We are to travel to Sol III and send an away team to {COORDINATES}. There we
      must establish diplomatic relations between the Federation and a puzzling species known as the
      Geocachers...
    </LogEntry>
  );
};

export default FirstContactEntry;
