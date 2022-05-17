export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        city: {
            street: {
                title: string
            }
        }
    }
}
type LessonType = {
    title: string
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: { model: string }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => { // 1 вариант
    // export const ManComponent: React.FC<PropsType> = (props) => {// 2 вариант деструктуриззации
    // присваивания
    //как еще вариант схож с первым типо можно
    //const {title, man, ...restProps} = props - тут у нас пропсы же уже есть поэтому
    // остаточные пропсы
    // const {title} = props;
    // const {name} = props.man;
    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    )
}