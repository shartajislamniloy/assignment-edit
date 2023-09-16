

const Course = ({props1, props2 }) => {
    const {image, course_title, course_description, price, reading_time} = props1
    return (
        <div style={{marginTop:'10px',  boxShadow: '10px 10px 10px 10px rgb(228, 237, 245)',marginLeft:'20px', padding:'20px'}}>
            <div style={{width:'250px'}}>
            <img src={image} alt="" style={{width:'250px'}} />
            <h3>{course_title}</h3>
            <p>{course_description}</p>
            <div style={{display:"flex", gap: '30px'}}>
                <div style={{display:"flex", gap: '5px', alignItems:'center'}}>
                    <button style={{height:'25px'}}><img src="currency_3495347.png" alt="" style={{width:"20px", height:'20px'}}/></button>
                    <p>Price:{price}</p>
                </div>
                <div style={{display:"flex", gap: '5px', alignItems:'center'}}>
                     <button style={{height:'25px', alignItems:'center'}}><img src="audiobook_6794104.png" alt=""  style={{width:"20px", height:'20px'}}/></button>
                     <p>Credit:{reading_time}hr</p>
                </div>
            </div>
            <button style={{backgroundColor:"blue", color:'white', width:'200px', height:'40px', borderRadius:'10px', marginLeft:'30px'}} onClick={() => props2(props1)}>Select</button>
            </div>
        </div>
    );
};

export default Course;