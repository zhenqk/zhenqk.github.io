 $( document ).ready( function() {
            //------------------------------------------------------------------------
            //Settings - params for WarpDrive
            var settings = {
                width: window.innerWidth,
                height: window.innerHeight,
                autoResize: false,
                autoResizeMinWidth: null,
                autoResizeMaxWidth: null,
                autoResizeMinHeight: null,
                autoResizeMaxHeight: null,
                addMouseControls: true,
                addTouchControls: true,
                hideContextMenu: true,
                starCount: 6666,
                starBgCount: 2222,
                starBgColor: { r:0, g:204, b:255 },
                starBgColorRangeMin: 20,
                starBgColorRangeMax: 80,
                starColor: { r:0, g:204, b:255 },
                starColorRangeMin: 50,
                starColorRangeMax: 100,
                starfieldBackgroundColor: { r:5, g:5, b:14 },
                starDirection: 1,
                starSpeed: 20,
                starSpeedMax: 200,
                starSpeedAnimationDuration: 2,
                starFov: 300,
                starFovMin: 200,
                starFovAnimationDuration: 2,
                starRotationPermission: true,
                starRotationDirection: 1,
                starRotationSpeed: 0.0,
                starRotationSpeedMax: 1.0,
                starRotationAnimationDuration: 2,
                starWarpLineLength: 2.0,
                starWarpTunnelDiameter: 100,
                starFollowMouseSensitivity: 0.025,
                starFollowMouseXAxis: true,
                starFollowMouseYAxis: true

            };

            //------------------------------------------------------------------------

            //standalone

            //init
            
            //var warpdrive = new WarpDrive( document.getElementById( 'holder' ) );
            var warpdrive = new WarpDrive( document.getElementById( 'canv' ), settings );

            //------------------------------------------------------------------------

            //jQuery

            //init
            
            //$( '#holder' ).warpDrive();
            //$( '#holder' ).warpDrive( settings );
            
            //------------------------------------------------------------------------

		} );