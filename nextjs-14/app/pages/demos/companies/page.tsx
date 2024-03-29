import CompanyColumns from "@/app/organisms/columns/company-columns";
import CompanyRows from "@/app/organisms/rows/company-rows";
import { NextPage } from "next";

const CompanyPage : NextPage = () => {
    
    const companyMap = CompanyRows().map((v) => (
        <CompanyColumns {...v}/> 
    ));
    return(<>
    <h2>글목록</h2>
    
 <table>
    <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
    {companyMap}
    </tbody>
</table>
    </>)
}

export default CompanyPage;