const Loading = ({ className }) => {
  return (
    <div className="animate-pulse">
      <div className={`bg-gray-300 rounded-md ${className}`} />
    </div>
  );
};

export default Loading;
