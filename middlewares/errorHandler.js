function errorHandler(err, req, res, next) {
  console.error("Error", err);

  if (res.headerSent) {
    return next(err);
  }

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(500).json({ error: message });
}

module.exports = errorHandler;
