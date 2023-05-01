import Head from 'next/head'
import Chakra from '../components/chakra'
import {
  Detail,
  Header,
  Main,
  Side,
} from '../components/mock'
import theme from '../components/theme';
import {
  Flex,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Mock(props: any) {
  const { cookies } = props;
  const t = "Mock | Todo App Tutorial";
  const [currentTask, setCurrentTask] = useState<task | null>(null)
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null)
  const onClickTask = (id: string) => setCurrentTaskId(id)
  useEffect(() => {
    const t = tasks.filter(t => t.id === currentTaskId)[0];
    if (t !== undefined) setCurrentTask(t)
  }, [currentTaskId])
  return (
    <>
      <Chakra cookies={cookies} theme={theme}>
        <Head>
          <title>{t}</title>
          <meta name="description" content="This page is Tutorial Todo App." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="nkitao" />
          {/* todo
          <link rel="apple-touch-icon" href="favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> 
          */}
          <meta name="twitter:title" content={t} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@nkitao7" />
          <meta name="twitter:creator" content="@nkitao7" />
          <meta name="twitter:image" content="https://blog.nkitao.com/wp-content/uploads/2023/02/4_57_25_45_162_231_0_98_0_59_0_0_p0_big.png" />
          <meta property="og:site_name" content={t} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://blog.nkitao.com/wp-content/uploads/2023/02/4_57_25_45_162_231_0_98_0_59_0_0_p0_big.png" />
          <meta property="og:title" content={t} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex flexDirection={"column"} h={"100vh"}>
          <Header
            w={"100vw"}
            boxShadow={['base', 'base', 'md']}
            bg={'#fff'}
            zIndex={2}
            position={"fixed"}
          />
          <Flex flexDirection={"row"}>
            <Side
              display={["none", "none", "flex"]}
              width={"10vw"}
              minW={200}
              position={"fixed"}
              pt={"50px"}
              tags={tags} />
            <Main
              minW={200}
              w={
                currentTaskId ? ["100vw", "100vw", "65vw"] : "100vw"
              }
              h={"95vh"}
              pl={[15, 15, 210]}
              pr={[3, 3, 3]}
              pt={20}
              tags={tags}
              tasks={tasks}
              currentTaskId={currentTaskId}
              handleTaskClick={onClickTask}
            />
            {currentTask &&
              <Detail
                w={["0vw", "0vw", "35vw"]}
                h={"100vh"}
                pt={20}
                pl={[0, 3, 3]}
                pr={[0, 6, 6]}
                task={currentTask}
                tags={tags}
              />
            }
          </Flex>
        </Flex>
      </Chakra>
    </>
  )
}
export type task = {
  id: string,
  detail: string,
  label: string,
  tags: string[],
  limitDate: string,
  createDate: string,
  updateDate: string
}
export type tag = {
  id: string,
  name: string
}
const tags = [
  { id: "001", name: "プライベート" },
  { id: "002", name: "アイデア" },
  { id: "003", name: "買い物" },
  { id: "004", name: "仕事" },
]

const tasks = [
  { id: "003", detail: "まずはどこから？\n ここからスタート \n　改行が複数\n　改行が複数\n　改行が複数\n　改行が複数\n　改行が複数", label: "旅行の計画を建てる", tags: ["001"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
  { id: "004", detail: "", label: "個人開発の計画をたてる", tags: ["001", "002"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
  { id: "005", detail: "", label: "りんご\n　改行が複数\n　改行が複数\n　改行が複数", tags: ["003"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
  { id: "006", detail: "", label: "洗剤", tags: ["003"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
  { id: "007", detail: "", label: "洗剤2", tags: ["004"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
]

const completedTasks = [
  { id: "001", label: "りんご", tags: ["001"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
  { id: "002", label: "焼きそばの具", tags: ["001", "002"], limitDate: "2023-06-10", createDate: "2023-04-10 23:10:10", updateDate: "2023-05-10" },
]