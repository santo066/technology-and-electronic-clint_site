import img1 from '../../public/img1.png'
import img2 from '../../public/img2.png'
import img5 from '../../public/img5.png'
import img4 from '../../public/img4.png'
import '../App.css'
export default function Banar() {
    return (
        <div className='h=[400px]'>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-4 '>
                <div className='col-span-2 h-[600px] bachground'>
                <h2 className='text-3xl font-bold  p-4'>upgrade your tech game</h2>
                <p className=' pl-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <img src={img1} className='h-[500px] mx-auto p-10' alt="" />
                </div>
                <div className='col-span-1 phone h-[600px]' >
                    <img src={img2} className='h-[300px] mx-auto' alt="" />
                    <h2 className='text-3xl font-bold pl-3'>iphone 11</h2>
                    <p className='p-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
                <div className='' >
                    <div className='ghori  h-[300px]'>
                        <img src={img5} className=' mx-auto w-80 p-8' alt="" />
                    </div>
                    <div className='headphone  h-[285px] mt-4'>
                    <h2 className='text-3xl font-bold  p-4'>Wireless Headphones</h2>
                        <img src={img4}  className='w-60 mx-auto p-8' />
                    </div>
                </div>
            </div>
        </div>
    )
}