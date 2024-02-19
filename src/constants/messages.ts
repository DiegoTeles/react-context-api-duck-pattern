export const messages = [{}];

interface DataTypes {
  isOpen: boolean;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
}

const data: DataTypes = {
  isOpen: true,
  type: 'success',
  title: 'Concluído!',
  message: '',
};

export const messageSuccess = {
  messageDeafault: {
    ...data,
    message: `Meu alerta de sucesso.`,
  },
};

export const messageError = {
  messageDeafault: {
    ...data,
    type: 'error',
    title: 'Ocorreu um erro',
    message: `Vish deu erro.`,
  },
};

export const messageWarning = {
  messageDeafault: {
    ...data,
    type: 'warning',
    title: 'Atenção!',
    message: `Aqui estamos com uma nova mensagem`,
  },
};
