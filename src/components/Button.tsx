import classNames from "classnames";


const styles = {
  fuchsiaContained :"py-4 px-6 text-lg cursor-pointer text-white capitalize  bg-fuchsia-700 rounded-xl font-medium tracking-widest hover:opacity-80 duration-200 ease-in-out",
  blueContained :"py-4 px-6 text-lg cursor-pointer text-white capitalize  opacity-90 bg-blue-950 rounded-xl font-medium tracking-widest hover:opacity-80 duration-200 ease-in-out",

}as const;

type ButtonProps = {
  text: string;
  className?: string;
  variant: keyof typeof styles;
}

const Button: React.FC<ButtonProps> = ({ text, className, variant }) => {
  const c = classNames(styles[variant],
    {[className || '']: !!className,}
)
  return (
    <button className={c}>
      {text}
    </button>
  );
};

export default Button;
