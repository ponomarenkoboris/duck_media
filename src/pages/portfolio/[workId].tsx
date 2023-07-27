import { useRouter } from "next/router";
import Layout from "@layout/index"

export default function Work() {
    const {query, back} = useRouter();

    return (
        <Layout>
            <h1>Page with dynmic parameter workId: {query.slug}</h1>
            <button onClick={() => back()}>Go back!</button>
        </Layout>
    )
}