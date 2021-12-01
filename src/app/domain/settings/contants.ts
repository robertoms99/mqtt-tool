const QOS_0_LEVEL = {
  id: 0,
  label: 'at most once'
}

const QOS_1_LEVEL = {
  id: 1,
  label: 'at least once'
}

const QOS_2_LEVEL = {
  id: 2,
  label: 'exactly once'
}

const PAYLOAD_TYPES = ['json', 'xml', 'binary']

const QOS_LEVELS = [QOS_0_LEVEL, QOS_1_LEVEL, QOS_2_LEVEL]

export { QOS_0_LEVEL, QOS_1_LEVEL, QOS_2_LEVEL, QOS_LEVELS, PAYLOAD_TYPES }
