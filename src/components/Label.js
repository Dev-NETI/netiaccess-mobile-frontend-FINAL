const Label = ({ className, children, ...props }) => (
  <label className={`${className} block text-sm text-gray-800 `} {...props}>
    {children}
  </label>
);

export default Label;
