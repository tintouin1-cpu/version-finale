declare global {
  interface Window {
    openKkiapayWidget?: (options: {
      amount: number;
      key: string;
      sandbox?: boolean;
      reason?: string;
      position?: string;
      theme?: string;
      data?: string;
      name?: string;
    }) => void;
    addKkiapayListener?: (event: string, callback: (response: any) => void) => void;
    FedaPay?: {
      init: (options: any) => {
        open: () => void;
      };
    };
  }
}

const KKIAPAY_PUBLIC_KEY = import.meta.env.VITE_KKIAPAY_PUBLIC_KEY || 'f765018edc4bab7b87091d51cd393f3abee13770';

export function triggerFedaPayPayment(amountInEur: number = 50) {
  // Conversion: 1 EUR ~ 655.957 FCFA (XOF)
  const amountInFcfa = Math.round(amountInEur * 655.957);

  const launchKkiapay = () => {
    if (typeof window.openKkiapayWidget === 'function') {
      window.openKkiapayWidget({
        amount: amountInFcfa,
        key: KKIAPAY_PUBLIC_KEY,
        sandbox: false,
        reason: `Don ONG AHB - Aide Humanitaire et de Bienfaisance (${amountInEur}€)`,
        position: 'center',
        theme: '#059669',
        name: 'ONG AHB',
      });
    } else if (window.FedaPay) {
      try {
        const widget = window.FedaPay.init({
          public_key: import.meta.env.VITE_FEDAPAY_PUBLIC_KEY || 'f765018edc4bab7b87091d51cd393f3abee13770',
          transaction: {
            amount: amountInFcfa,
            description: `Don ONG AHB - Aide Humanitaire et de Bienfaisance (${amountInEur}€)`,
          },
        });
        widget.open();
      } catch (err) {
        console.error('Erreur lors de l’ouverture du paiement:', err);
      }
    }
  };

  if (typeof window.openKkiapayWidget === 'function') {
    launchKkiapay();
  } else {
    const script = document.createElement('script');
    script.src = 'https://cdn.kkiapay.me/k.js';
    script.async = true;
    script.onload = () => {
      launchKkiapay();
    };
    script.onerror = () => {
      launchKkiapay();
    };
    document.body.appendChild(script);
  }
}

