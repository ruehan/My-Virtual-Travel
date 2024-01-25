
type PageParams = {
    slug: string
}

export default function Destination({params} : {params:PageParams}) {

    console.log(params)

    return (
        <>
            <div>
            <h1>{params.slug}에 대한 여행 정보</h1>
            </div>
        </>
    )
}