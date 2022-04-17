# copied from https://github.com/tchorwat/stockfish/blob/master/Dockerfile.14

FROM alpine:latest AS builder
# Install dependencies
RUN apk add --no-cache git g++ make

RUN git clone --depth 1 --branch sf_14 https://github.com/official-stockfish/Stockfish.git

WORKDIR /Stockfish/src
RUN echo "arch:$( uname -m )" \
&& case $( uname -m ) in \
  x86_64) \
    make build ARCH=x86-64-modern \
  ;; \
  aarch64) \
    make build ARCH=armv8 \
  ;; \
  armv7l) \
    make build ARCH=armv7 \
  ;; \
  ppc64le) \
    make build ARCH=ppc-64 \
  ;; \
  *) \
    exit 1 \
  ;; \
esac

FROM alpine:latest
COPY ./entrypoint.sh /

RUN chmod +x /entrypoint.sh \
 && apk add --no-cache libstdc++ ucspi-tcp6 \
 && addgroup -g 1000 stockfish \
 && adduser -u 1000 -G stockfish -HD stockfish

WORKDIR /stockfish/
USER stockfish:stockfish

COPY --chown=stockfish:stockfish --from=builder /Stockfish/src/stockfish /stockfish/
COPY --chown=stockfish:stockfish --from=builder /Stockfish/Copying.txt /stockfish/
COPY --chown=stockfish:stockfish source.txt /stockfish/
COPY --chown=stockfish:stockfish --from=builder /Stockfish/src/*.nnue /stockfish/

EXPOSE 23249
ENTRYPOINT ["/entrypoint.sh"]

# FROM alpine
# RUN apk update
# RUN apk add git make g++
# RUN git clone https://github.com/official-stockfish/Stockfish.git
# WORKDIR /Stockfish/src
# RUN make net
# RUN make build ARCH=x86-64-modern
# CMD ["./stockfish"]
# for some damn reason it says it can't find the makefile even though it's there