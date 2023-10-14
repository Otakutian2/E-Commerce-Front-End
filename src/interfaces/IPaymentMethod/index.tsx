interface IPaymentMethodPrincipal {
  name: string;
}

interface IPaymentMethodGet extends IPaymentMethodPrincipal {
  id: string;
}

export type { IPaymentMethodPrincipal, IPaymentMethodGet };
