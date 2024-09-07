import Organization from "@/components/organizationCard/Organization";

const Organizations = () => {
    return <div className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Organization/>
      <Organization/>
      <Organization/>
      <Organization/>
    </div>;
  };
  
  export default Organizations;


