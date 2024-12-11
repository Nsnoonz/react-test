import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 

interface FormData {
  keyword: string;
};

interface ApiResponse {
  title:string;
  eid:string;
  url:string;
  description:string;
  photos: string[];
  tags:[];
}

const Home: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({keyword: ''});
  const [arrData, setData] = useState<ApiResponse[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const fnSeach = async (data: string) => {
      try {
        console.log(111)
        const txtSearch = data ? data : formData.keyword
        if(txtSearch) {
          const responseAuth = await axios.get(`http://api-test-eight-omega.vercel.app/api/trips?keyword=${txtSearch}`)
          if (responseAuth.data.length > 0) {
            setData(responseAuth.data)
          } else {
            Swal.fire({ title: '', text: 'ไม่พบข้อมูล', icon: 'warning', confirmButtonText: 'OK' });
          }
        } else {
          Swal.fire({ title: '', text: 'กรุณากรอกข้อมูล', icon: 'warning', confirmButtonText: 'OK' });
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          Swal.fire({ title: 'Error', text: error.message, icon: 'error', confirmButtonText: 'OK' });
        } else {
          console.error('An unknown error occurred');
        }
      }
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchParam = queryParams.get('search') || ''
    if (searchParam) fnSeach(searchParam)
  }, []);

  return (
    <>
    <div className="container mx-auto py-20">
      {/* Form */}
      <div className="w-[50%] mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md mb-20">
        <div className="flex items-center justify-between ">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">ค้นหา</label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            className="w-[75%] p-2 border-2 rounded-md "
          />
          <button type="submit" onClick={() => fnSeach('')} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
        </div>
        
      </div>

      {arrData.length > 0 && (
        <>
        {arrData.map((item, i) => (
          <div className="w-[100%] flex flex-wrap border-2 border-gray-200 rounded-lg shadow-md my-5">
            <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 p-4">
            <img key={i} src={item.photos[0]} className="w-full rounded object-cover mx-2"/>
            </div>
            <div className="flex flex-wrap w-full sm:w-full md:w-2/3 lg:w-2/3 p-4">
              <a href={item.url} key={i} target='blank' className='flex text-2xl'>{item.title} </a>
              <div className="w-full">{item.description} <a className="text-blue-900 hover:text-blue-700" href={item.url} target='blank'>อ่านต่อ</a></div>
              {/* <div className="">หมวด {item.tags.map((elm, j) => ( <Link to={'/Project?'+elm} className="text-blue-900 hover:text-blue-700" key={j}>{(j == 0 ? '': ', ')}{elm}</Link>))}</div> */}
              {/* <div className="">หมวด {item.tags.map((elm, j) => ( <a href={'/Project?search='+elm} className="text-blue-900 hover:text-blue-700" onClick={() => fnSeach(elm)} key={j}>{(j == 0 ? '': ', ')}{elm}</a>))}</div> */}
              <div className="w-full">หมวด {item.tags.map((elm, j) => ( <a href={'/Project?search='+elm} className="text-blue-900 hover:text-blue-700"  key={j}>{(j == 0 ? '': ', ')}{elm}</a>))}</div>
              <div className="flex flex-wrap items-end " >
                {
                  item.photos.slice(1).map((image, index) => (
                    <img key={index} src={image} className="h-40 w-40 rounded object-cover mx-2"/>
                  ))
                }
              </div>
            </div>
          </div>
        ))}
        </>
      )}
    </div>
  </>
  );
};

export default Home;