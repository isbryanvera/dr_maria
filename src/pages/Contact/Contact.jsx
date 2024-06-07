import { Publicity } from '../../components/Publicity/Publicity';
import imgDoc from '../../assets/images/Doctor.png';
import { Form } from '../../components/Form/Form';

const Contact = () => {
  return (
    <>
      <div className='flex items-center gap-[100px]'>
        <Form className="w-2/3"></Form>
        <figure className="w-auto max-w-[400px] self-start hidden lg:block">
          <img className="w-full h-full object-cover rounded-xl shadow-md" src={imgDoc} alt="" />
        </figure>
      </div>
      <Publicity></Publicity>
    </>
  );
};

export { Contact };
