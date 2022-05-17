import {ManType} from "./Destructuring";

let props: ManType;
beforeEach(() => {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}, {title: '4'}],
        address: {
            city: {
                street: {
                    title: 'Independence street'
                }
            }
        }
    }
})
test('destructuring test', () => {
    //data

    //action
    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props;
    const {title} = props.address.city.street

    const {age: a, lessons: l} = props;
    const {title: t} = props.address.city.street

    //expect result
    expect(age).toBe(32)
    expect(lessons.length).toBe(4)
    expect(title).toBe('Independence street')

    expect(a).toBe(32)
    expect(l.length).toBe(4)
    expect(t).toBe('Independence street')
})

test('destructuring test in function', () => {
    const L1 = props.lessons[0]
    const L2 = props.lessons[1]

    const [ls1, ls2] = props.lessons
    const [,, ls3, ...restLessons] = props.lessons

    expect(L1.title).toBe("1")
    expect(L2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")
    expect(ls3.title).toBe("3")
    expect(restLessons.length).toBe(1)
})