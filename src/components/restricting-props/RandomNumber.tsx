type NumberType ={
    value:number
}
type PositiveNumber =NumberType & {
    isPositive:boolean
    isNegative?:never
    isZero ?: never

}
type NegativeNumber =NumberType & {
    isPositive?:never
    isNegative: boolean
    isZero ?: never

}
type ZeroNumber =NumberType & {
    isPositive?:never
    isNegative?:never
    isZero : boolean

}

type RandomNumberProps =PositiveNumber |NegativeNumber|ZeroNumber

const RandomNumber = ({value,isNegative,isPositive,isZero}:RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {isZero && 'Zero'}
        </div>
    );
};

export default RandomNumber;