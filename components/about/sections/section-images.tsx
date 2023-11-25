import Image from 'next/image';

const SectionImages = () => {
  return (
    <section className='flex-1 relative'>
      <div className='lg:absolute -top-30 left-8'>
        <div className='relative w-[70vw] mb-5 lg:w-48 h-60'>
          <Image
            src='/imagenes/trainer-1.png'
            alt='Trainer'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </div>
      <div className='lg:absolute top-0 right-40'>
        <div className='relative w-[70vw] mb-5 lg:w-48 h-60'>
          <Image
            src='/imagenes/trainer-2.png'
            alt='Trainer'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </div>
      <div className='lg:absolute -top-64 right-52'>
        <div className='relative w-[70vw] mb-5 lg:w-64 h-48'>
          <Image
            src='/imagenes/trainer-4.png'
            alt='Trainer'
            fill
            className='object-cover rounded-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default SectionImages;