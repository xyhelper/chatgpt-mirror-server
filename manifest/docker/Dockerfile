FROM loads/alpine:3.8

###############################################################################
#                                INSTALLATION
###############################################################################

ENV WORKDIR                 /app
ADD resource                $WORKDIR/resource
COPY config.prod.yaml     $WORKDIR/config.yaml
COPY frontend/dist          $WORKDIR/resource/public/xyhelper
ADD ./temp/linux_amd64/main $WORKDIR/main
RUN chmod +x $WORKDIR/main

###############################################################################
#                                   START
###############################################################################
WORKDIR $WORKDIR
CMD ./main
