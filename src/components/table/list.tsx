import React , {useState , useContext} from 'react';
import Form from 'react-bootstrap/Form';
import {AuthContext} from '../../App';

const CreateList = (props) =>{
    const {data} = useContext(AuthContext);
    const handleChange = (type) => (event)=> {
        let data_filter = data.filter( element => element.id == props.id)
        if(data_filter.length > 0){
            data.map(ele => {
                if(ele.id == data_filter[0].id){
                   type == 'credit' ? ele.credit = event.target.value :  ele.value = event.target.value
                }
            });
        } else {
            type == 'credit' ? data.push({ id: props.id, credit: event.target.value,value: 0})  :  data.push({ id: props.id, credit:0,value: event.target.value})
        }
    };
    return (
        <tr>
            <td>{props.id}</td>
            <td><Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm"/></td>
            <td><Form.Select aria-label="Grade" className='select-credit' 
                onChange={handleChange('credit')}
            >
                <option>-- หน่วยกิต--</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                </Form.Select>
            </td>

            <td><Form.Select aria-label="Grade" className='select-grade' 
                onChange={handleChange('grade')}
            >
                <option>-- เกรด--</option>
                <option value="4">A</option>
                <option value="3.5">B+</option>
                <option value="3">B</option>
                <option value="2.5">C+</option>
                <option value="2">C</option>
                <option value="1.5">D+</option>
                <option value="1">D</option>
                <option value="0">F</option>
                </Form.Select>
            </td>
   
          </tr>
    );
}
export default CreateList;