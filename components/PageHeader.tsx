interface PageHeaderProps {
  page: {
    title: string;
    subtitle: string;
  };
}

const PageHeader = async ({ page }: PageHeaderProps) => {
  return (
    <section className="h-[500px] bg-[#5c5b5b] relative">
      <div>
        <div className="bgLines_Header" />
        <div className="bgStyle" />
        <div className="absolute z-[4] top-0 w-full bg-black opacity-60 h-[600px]" />
      </div>
      <div className="absolute z-[5] w-full flex justify-center items-center py-[180px] h-[500px]">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <h2>{page.title}</h2>
          <p>{page.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
