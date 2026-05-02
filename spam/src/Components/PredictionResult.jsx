
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

import { ShieldCheck, AlertTriangle } from 'lucide-react';

const PredictionResult = ({ result }) => {
  if (!result) return null;

  const isHam = result === "NOT SPAM";

  return (
    <div
      className={`w-full p-3 rounded-2xl border transition-all duration-500 ${
        isHam
          ? "justify-items-center text-white text-sm bg-emerald-500 border-emerald-100"
          : "justify-items-center text-white text-sm bg-red-500 border-red-100"
      }`}
    >
      <div className="flex items-start gap-4">
        <h3 className="font-bold">
          {isHam ? (
            <>
              Legitimate <FontAwesomeIcon icon={faEnvelope} className="ml-1" />
            </>
          ) : (
            <> Spam <FontAwesomeIcon icon={faTriangleExclamation}/></>
          )}
        </h3>
      </div>
    </div>
  );
};

export default PredictionResult; 
