import axios from 'axios';
import { useEffect, useState } from 'react'
import { convertKeysToCamelCase } from '../../../util/converKeysToCamelCase';
import ThesisItem from '../segments/ThesisItem';

interface IThesisitem{
    postIndex : number;
    title : string;
    submissionDate : string;
    conferenceName : string;
    type : "A" | "D";
  }
  

export default function ThesisInfo() {

    const [thesisList, setThesisList] = useState<IThesisitem[]>([]);

    useEffect(() => {
      const fetchThesisList = async () => {
        try {
          const { data, status } = await axios.get<IThesisitem[]>("http://localhost:3000/post");
          if (status === 200) {
            setThesisList(convertKeysToCamelCase(data));
          }
        } catch (e: unknown) {
          if (e instanceof Error) {
            console.error(e.message);
          } else {
            console.error("오류가 발생했습니다.");
          }
        }
      };
      fetchThesisList();
    }, []);


  return (
    <section className='thesis-info-container'>
        <table className='thesis-info-table'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>학술대회명</th>
                    <th>논문명</th>
                    <th>날짜</th>
                    <th>비고(국내/해외)</th>
                </tr>
            </thead>
            <tbody>
                {thesisList.map((thesis) => 
                    <ThesisItem key={thesis.postIndex} {...thesis}/>
                )}
            </tbody>  
        </table>
    </section>
  )
}
