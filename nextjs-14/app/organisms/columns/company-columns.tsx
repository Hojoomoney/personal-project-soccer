export default function CompanyColumns(props : ICompany){
    return(
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
}