interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={` py-4 px-6 text-lg cursor-pointer text-white capitalize  bg-fuchsia-600 rounded-xl font-medium tracking-widest hover:opacity-80 duration-200 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
