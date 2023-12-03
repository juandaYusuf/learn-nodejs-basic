import process from "process"

process.report.reportOnFatalError = true
process.report.reportOnUncaughtException = true
process.report.reportOnSignal = true
process.report.filename = "err-report.json"

function exError() {
  throw new Error("Error")
}

exError()