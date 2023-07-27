import React , {useState , useContext} from 'react';
import {AuthContext} from '../../App';
import Button from 'react-bootstrap/Button';

const BtnSubmit = () =>{
    const {data} = useContext(AuthContext);
    const calculate = () =>{
        let score = 0;
        let total_credit = 0;
        if(data.length <= 0) {
            return;
        }
        data.map(ele => {
            score += parseFloat(ele.value) * parseFloat(ele.credit); 
            total_credit += parseFloat(ele.credit)    
        });
        if(score == 0 && total_credit == 0) {
            return;
        }
       alert("Grade: "+(score/total_credit).toFixed(2));
    }
    return (
        <Button variant="primary" onClick={calculate}>Calculate</Button>
    )
}
export default BtnSubmit;