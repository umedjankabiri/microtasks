import {MappedStudents} from "common/types/nested/MappedStudents";

export const DemonstrateMapMethod = (props: MappedStudents) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    const mappedCars = topCars.map((car, index) => {
        return (
            <li key={index}>
                <span>manufacturer: {car.manufacturer}, </span>
        <span>model: {car.model}</span>
        </li>
    )
    })

    const mappedStudents = props.students.map((student) => {
        return (
            <li key={student.id}>
                <span>name: {student.name}, </span>
        <span>age: {student.age}</span>
        </li>
    )
    });
    return (
        <div>
            <ul>
                {mappedStudents}
        <hr/>
        {mappedCars}
        </ul>
        </div>
    );
};