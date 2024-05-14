import { Publicity } from '../../components/Publicity/Publicity';
import { Form } from '../../components/Form/Form';

const Contact = () => {
  return (
    <>
      <div className='flex items-center gap-[100px]'>
        <Form className="w-2/3"></Form>
        <figure className="w-auto self-start">
          <img className="w-full h-full object-cover" src="/src/assets/images/Doctor.png" alt="" />
        </figure>
      </div>
      <Publicity></Publicity>
    </>
  );
};

export { Contact };
