import { getApiFsMap } from '@/swagger/transform'
import { writeApiFsMap } from '@/fs'

const apiFsMap = await getApiFsMap()
await writeApiFsMap(apiFsMap)
