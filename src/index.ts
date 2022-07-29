import { getSwaggerJSON } from '@/swagger/swaggerJson'
import { getApiFsMap } from '@/swagger/transform'
import { writeApiFsMap } from '@/fs'

const { paths } = await getSwaggerJSON()

const apiFsMap = await getApiFsMap(paths)
await writeApiFsMap(apiFsMap)
