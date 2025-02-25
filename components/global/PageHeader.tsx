interface PageHeaderProps {
  page: {
    title: string;
    subtitle: string;
  };
}

const PageHeader = async ({ page }: PageHeaderProps) => {
  return (
    <section className="h-[500px] relative">
      <div>
        <div className="absolute z-[3] top-0 w-full bg-black opacity-90 h-[480px]" />
        <div className="bgLines_Header" />
        <div className="bgStyle" />
      </div>
      <div className="text-white absolute z-[5] w-full flex justify-center items-center pt-[140px] pb-[220px] h-[500px]">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <h2>{page.title}</h2>
          <h6>{page.subtitle}</h6>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
