import { useEffect, useState } from "react";
import Course from "./Course";


const Courses = () => {
    const [courses, setCourses] = useState([])
    const [select, setSelect] = useState([])
    const[remaining, setRemaining] = useState(0)
    const [totalCredit, setTotalCredti] = useState(0)
    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    const handleSelect = (cc) =>{
        const isExist = select.find((yy) => yy.id == cc.id)
        let count = cc.reading_time;
        if(isExist){
            alert('not possible')
        }
        else{
            select.forEach((zz) =>{
                count = count + zz.reading_time
            })
            const totalRem = 20 - count;
            if(count > 20 || totalRem<0){
                return alert('not possible')
            }
            else{
        const newSelect = [...select, cc]
        setSelect(newSelect)
        setRemaining(totalRem)
        setTotalCredti(count)
    }
    }
    }

   

    
    return (
        <div style={{display:'flex', gap:'30px'}}>
           
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', width:'900px',}}>

            {
                courses.map(course => <Course props1={course}
                props2 ={handleSelect}
                ></Course>)
            }
        </div>
        <div style={{boxShadow: '10px 10px 10px 10px rgb(228, 237, 245)', width: '300px', padding:'20px'}}>
                <h4 style={{color:"blue"}}>Credit Hour Remaining {remaining}  hr</h4>
                <div style={{backgroundColor:"gray", height:'1px', width:'200px'}}></div>
                <h2>Course Name</h2>
                <ol>
                {
                      select.map(cc =><li>{cc.course_title}</li>)
                    }
                </ol>
                <div style={{backgroundColor:"gray", height:'1px', width:'200px'}}></div>
                <p>Total Credit Hour: {totalCredit}</p>
        </div>
        </div>
    );
};

export default Courses;