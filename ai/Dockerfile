FROM alpine
RUN apk update
RUN apk add git
RUN apk add make
RUN git clone https://github.com/official-stockfish/Stockfish.git
RUN cd Stockfish
RUN cd src
RUN make net
RUN make build ARCH=x86-64-modern
CMD ["./stockfish"]
# for some damn reason it says it can't find the makefile even though it's there