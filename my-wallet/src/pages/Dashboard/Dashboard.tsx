import ContentHeader from "../../components/ContentHeader"
import SelectInput from "../../components/SelectInput"
import { DashboardWrapp } from "./styles"

export const Dashboard = () => {
      const options = [
         {value: 'Banana', label: 'Banana'},
         {value: 'Maca', label: 'Maca'},
         {value: 'Jaca', label: 'Jaca'}
      ]

    return (
        <DashboardWrapp>
            <ContentHeader title="Dashboard" lineColor="#FFF">
                <SelectInput options={options}></SelectInput>
            </ContentHeader>
        </DashboardWrapp>
    )
}