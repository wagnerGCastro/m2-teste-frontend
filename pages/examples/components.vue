<template>
  <div class="components mb-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="title">Alerts</h2>
        </div>

        <div class="col-lg-12">
          <base-alert type="info" dismissible>
            This is a notification with close button.
          </base-alert>

          <base-alert type="default" dismissible>
            <strong>Default!</strong> This is a default alert—check it out!
          </base-alert>

          <base-alert type="primary" dismissible>
            <strong>Primary!</strong> This is a primary alert—check it out!
          </base-alert>

          <base-alert type="info" dismissible>
            <strong>Info!</strong> This is a info alert—check it out!
          </base-alert>

          <base-alert type="success" dismissible>
            <strong>Success!</strong> This is a success alert—check it out!
          </base-alert>

          <base-alert type="danger" dismissible>
            <strong>Danger!</strong> This is a danger alert—check it out!
          </base-alert>

          <base-alert type="warning" dismissible>
            <strong>Warning!</strong> This is a warning alert—check it out!
          </base-alert>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
         <h2 class="title">Cards</h2>
        </div>

        <div class="col-lg-4">
          <card style="width: 20rem;">
            <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f6b99d2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f6b99d2%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </card>
        </div>

        <div class="col-lg-4">
          <card style="width: 20rem;">
            <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f6b99d2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f6b99d2%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </card>
        </div>

        <div class="col-lg-4">
          <card style="width: 20rem;">
            <img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f6b99d2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f6b99d2%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"/>
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </card>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-12">
          <h2 class="title">Notifications</h2>
          <base-button @click="$notify('Simple notification')">Simple</base-button>
          <base-button @click.native="notifyVue('bottom', 'center')"> 
            Notification Dinamic
          </base-button>
          <base-button type="primary" @click="$notify({type: 'primary', message: 'Primary Notification'})">Primary</base-button>
          <base-button type="info" @click="$notify({type: 'info', message: 'Info Notification'})">Info</base-button>
          <base-button type="success" @click="$notify({type: 'success', message: 'Success Notification'})">Success</base-button>
          <base-button type="warning" @click="$notify({type: 'warning', message: 'Warning Notification'})">Warning</base-button>
          <base-button type="warning"  @click="$notify({type: 'danger', message: 'Danger Notification'})">Danger</base-button>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-12">
          <h2 class="title">Loading</h2>
          <loading></loading>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-12">
          <h2 class="title">Buttons</h2>
          <base-button class="animation-on-hover" type="default">Default</base-button>
          <base-button class="animation-on-hover" type="primary">Primary</base-button>
          <base-button class="animation-on-hover" type="info">
            <i class="tim-icons icon-heart-2"></i> Info With Icon
          </base-button>
          <base-button class="animation-on-hover" type="success">Success</base-button>
          <base-button class="animation-on-hover" type="warning" round >Warning</base-button>
          <base-button class="animation-on-hover" type="danger" loading>Danger</base-button>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <h2 class="title">Modal</h2>
          <div class="row">
            <div class="col-md-4">
              <base-button type="primary" @click="modals.modal0 = true">
                Launch demo modal
              </base-button>
              <modal :show.sync="modals.modal0">
                <template slot="header">
                  <h3 class="modal-title" id="exampleModalLabel">Modal title</h3>
                </template>
                <div>
                  Woohoo, you're reading this text in a modal!
                </div>
                <template slot="footer">
                  <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
                  <base-button type="primary">Save changes</base-button>
                </template>
              </modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue';
export default {
  components: { Loading },
  name: 'index',
  data () {
    return {
      type: ['', 'info', 'success', 'warning', 'danger'],
      notifications: {
        topCenter: false
      },
      modals: { 
        modal0: false 
      }
    };
  },
  methods: {
    notifyVue(verticalAlign, horizontalAlign) {
      let color = Math.floor(Math.random() * 4 + 1);
      this.$notify({
        message:
          'Welcome to <b>Vue Black Dashboard Pro</b> - a beautiful resource for every web developer',
        timeout: 30000,
        icon: 'tim-icons icon-bell-55',
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: this.type[color]
      });
    }
  }
}
</script>

<style scoped>
  h2.title { margin-bottom: 10px;}
</style>
