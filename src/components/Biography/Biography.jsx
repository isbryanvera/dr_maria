import imgAboutMe from '../../assets/images/Doctor.png';

const Biography = () => {
  return (
    <div className="flex flex-col w-full items-center lg:items-start lg:flex-row gap-12">
      <div className="flex flex-col gap-12 w-full lg:w-2/3 order-2 lg:order-1">
        <div className="flex flex-col gap-6">
          <h2 className="text text-4xl font-medium text-center lg:text-start">Dra Maria Baeza</h2>
          <p>At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being.</p>
        </div>
        <h3 className="text text-2xl">More than anything else we love creating happy, healthy smiles.</h3>
        <p>We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.</p>
      </div>
      <figure className="w-1/3 min-w-[400px] order-1 lg:order-2">
        <img className="w-full h-full object-cover" src={imgAboutMe} alt="" />
      </figure>
    </div>
  );
};

export { Biography };
