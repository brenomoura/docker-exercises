FROM golang AS builder

WORKDIR /usr/share/fullcycle

COPY main.go .

RUN go build main.go


FROM scratch

COPY --from=builder /usr/share/fullcycle/main .

CMD ["/main"]

