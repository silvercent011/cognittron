import neo4j, { Record, RecordShape } from "neo4j-driver";

// docker run \
//     --publish=7474:7474 --publish=7687:7687 \
//     --volume=$HOME/neo4j/data:/data \
//     neo4j

const URI = "neo4j://localhost";
const USER = "neo4j";
const PASSWORD = "neo4jneo4j";

const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
const serverInfo = await driver.getServerInfo();

driver.session().run(`
      CREATE (s:Step { 
        id: 'step-1', 
        title: 'O primeiro passo', 
        content: 'O conteúdo do primeiro passo' 
      })
      CREATE (t:Trail {
        id: 'trail-1',
        title: 'A primeira trilha'
      })-[:HAS_STEP]->(s)
      CREATE (tm:Theme {
        id: 'theme-1',
        title: 'O primeiro tema'
      })-[:HAS_TRAIL]->(t)
      CREATE (a:Academy {
        id: 'academy-1',
        title: 'A primeira academia'
      })-[:HAS_THEME]->(tm)
  `);

console.log("Connection established");
console.log(serverInfo);

function handleRecord(record: any): any {
  if (Array.isArray(record)) {
    return record.map((rcr) => handleRecord(rcr));
  }
  if (typeof record === "object") {
    return record.properties;
  }
}

function handleRecords(
  records: Record<RecordShape, PropertyKey, RecordShape<PropertyKey, number>>[]
) {
  const handled: { [key: string]: any } = {};

  const keys = records[0].keys;

  const fields = records[0]["_fields"];

  keys.forEach((key, index) => {
    handled[key.toString()] = handleRecord(fields[index]);
  });

  return handled;
}

export { driver, handleRecords };
